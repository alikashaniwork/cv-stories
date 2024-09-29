"use client";
import useDeleteAllPages from "@/src/queries/story/editor/page/useDeleteAll";
import { alpha, CircularProgress, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import Image from "next/image";
import { MouseEvent, useContext, useState } from "react";
import { Context } from "../../../../EditorProvider";

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
        borderRadius: 12,
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(0),
        minWidth: 220,
        background: "#444",
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

export default function MenuContainer() {
    const { _id } = useContext(Context);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const { pages } = useContext(Context);

    const deleteLocations = useDeleteAllPages(_id);

    const { isPending } = deleteLocations;

    return (
        pages.length > 0 && (
            <>
                <button
                    className="gap-2 bg-neutral-700 w-8 h-8 rounded-full"
                    onClick={handleClick}
                    type="button"
                >
                    <Image
                        width={19}
                        height={19}
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
                    <button
                        className="text-neutral-300 text-[.95rem] tracking-[.8px] font-sfl w-full justify-between py-[10px] px-4 pr-[14px]"
                        onClick={() => deleteLocations.mutate()}
                        disabled={isPending}
                    >
                        {isPending && (
                            <CircularProgress
                                size={15}
                                sx={{ color: "#ff0030" }}
                            />
                        )}
                        Delete All Pages
                        <Image
                            width={20}
                            height={20}
                            src="/icons/trash/gray-2.png"
                            alt=""
                        />
                    </button>
                </StyledMenu>
            </>
        )
    );
}
