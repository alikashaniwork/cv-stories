"use client";
import { alpha, styled } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import Delete from "./Delete";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 12,
        marginTop: theme.spacing(0.2),
        marginLeft: theme.spacing(3),
        minWidth: 150,
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

export default function MenuContainer({
    locationId,
    onOpen,
}: {
    onOpen: () => void;
    locationId: string;
}) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return (
        <>
            <button className="gap-2" onClick={handleClick} type="button">
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
                <div>
                    <button
                        className="text-neutral-300 text-[.95rem] tracking-[.8px] font-sfl w-full justify-between py-[10px] px-4 border-b border-[#666]"
                        onClick={() => {
                            onOpen();
                            handleClose();
                        }}
                    >
                        Edit
                        <Image
                            width={15}
                            height={15}
                            src="/icons/edit/gray.png"
                            alt=""
                        />
                    </button>
                    <Delete locationId={locationId} onClose={handleClose} />
                </div>
            </StyledMenu>
        </>
    );
}
