"use client";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { alpha, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import { useParams } from "next/navigation";
import { MouseEvent, useContext, useState } from "react";
import { Context } from "../../_Context";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 20,
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1.5),
        background: "#282828",
        padding: 0,
        width: 160,
        height: 50,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        "& .MuiMenu-list": {
            padding: "0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export default function PageNumber() {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const { data, setData, onChange } = useContext(Context);
    return (
        <>
            <button className="gap-1" onClick={handleClick} type="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#aaa"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
                <p className="uppercase text-[.82rem] tracking-[1.5px] text-neutral-400">
                    Page NO.
                </p>
                <p className="text-neutral-200">{data.pageNumber}</p>
            </button>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <div className="w-full h-[50px] flex items-center justify-between">
                    <input
                        style={{ textAlignLast: "center" }}
                        className="w-2/3 flex-grow h-full text-center text-neutral-200 font-sfbold text-2xl bg-[unset] border-none"
                        id="pageNumber"
                        type="text"
                        name="pageNumber"
                        value={data.pageNumber}
                        onChange={onChange}
                    />
                    <button
                        className="w-1/3 h-full"
                        onClick={() =>
                            setData({
                                ...data,
                                pageNumber: story?.pages.length! + 1,
                            })
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-counterclockwise"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
                            />
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
                        </svg>
                    </button>
                </div>
            </StyledMenu>
        </>
    );
}
