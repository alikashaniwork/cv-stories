"use client";

import useDeleteCharacter from "@/src/queries/story/editor/character/useDelete";
import { alpha, CircularProgress, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MouseEvent, useState } from "react";
import Edit from "./edit/Edit";

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
        minWidth: 160,
        background: "#252525",
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

export default function MenuContainer({
    characterId,
}: {
    characterId: string;
}) {
    const { id } = useParams<{ id: string }>();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(!openEdit);

    const deleteCharacter = useDeleteCharacter(id, characterId);
    return (
        <>
            <button onClick={handleClick} type="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#eee"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
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
                <div>
                    <button
                        className="w-full justify-between text-neutral-400 font-sfl text-[.95rem] tracking-[.8px] p-[14px] px-[18px] border-b border-[#333]"
                        onClick={() => {
                            handleOpenEdit();
                            handleClose();
                        }}
                    >
                        Edit
                        <Image
                            width={14}
                            height={14}
                            src="/icons/edit/gray-2.png"
                            alt=""
                            className="mr-[1.8px]"
                        />
                    </button>
                    <button
                        className="w-full justify-between text-neutral-400 font-sfl text-[.95rem] tracking-[.8px] p-[14px] px-[18px]"
                        onClick={() => deleteCharacter.mutate()}
                    >
                        Remove
                        {deleteCharacter.isPending ? (
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
            <Edit
                open={openEdit}
                onClose={handleOpenEdit}
                characterId={characterId}
            />
        </>
    );
}
