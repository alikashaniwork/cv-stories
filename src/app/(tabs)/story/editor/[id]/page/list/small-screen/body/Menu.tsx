"use client";

import useDeletePage from "@/src/queries/story/editor/page/useDelete";
import { alpha, CircularProgress, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MouseEvent, useState } from "react";

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
        marginRight: theme.spacing(2),
        minWidth: 150,
        background: "#2d2d2d",
        padding: 0,
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

export default function MenuContainer({ pageId }: { pageId: string }) {
    const { id } = useParams<{ id: string }>();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const deletePage = useDeletePage(id, pageId);
    const { isPending } = deletePage;
    return (
        <>
            <button className="gap-2" onClick={handleClick} type="button">
                <Image
                    width={16}
                    height={16}
                    src="/icons/other/more-l.png"
                    alt=""
                />
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
                <div className="*:justify-between *:w-full *:p-3 *:px-5 *:text-neutral-300">
                    <Link
                        href={`${pageId}`}
                        className="border-b border-[#393939]"
                    >
                        Edit
                        <Image
                            width={14}
                            height={14}
                            src="/icons/edit/gray-2.png"
                            alt=""
                            className="mr-[1.8px]"
                        />
                    </Link>
                    <button onClick={() => deletePage.mutate()}>
                        Remove
                        {isPending ? (
                            <CircularProgress
                                size={15}
                                sx={{ color: "#ff5555" }}
                            />
                        ) : (
                            <Image
                                width={19}
                                height={19}
                                src="/icons/trash/gray-2.png"
                                alt=""
                            />
                        )}
                    </button>
                </div>
            </StyledMenu>
        </>
    );
}
