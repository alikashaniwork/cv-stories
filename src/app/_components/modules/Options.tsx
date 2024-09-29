import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
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
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: "#f1f1f1",
        background: "#2a2a2a55",
        backdropFilter: "blur(12px)",
        fontFamily: "sfl",
        padding: "0",
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "0",
        },
        "& .MuiMenuItem-root": {
            padding: "12px 20px",
            textAlign: "center",
            "& .MuiSvgIcon-root": {
                fontSize: 18,
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
        ...theme.applyStyles("dark", {
            color: theme.palette.grey[300],
        }),
    },
}));

export default function Options({
    onOpen,
}: {
    onOpen: (value: string) => void;
}) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return (
        <div>
            <Button
                className="font-sfr capitalize text-[.95rem] gap-2 rounded-xl bg-rose-700 hover:bg-rose-600"
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
            >
                <Image
                    width={12}
                    height={12}
                    src="/icons/plus/white.png"
                    alt=""
                    priority
                />
                New
                <span className="hidden min-[992px]:block -ml-1">Story</span>
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        handleClose();
                        onOpen("short");
                    }}
                    disableRipple
                    className="font-sfl uppercase tracking-[1.5px] justify-center text-sm"
                >
                    Short
                </MenuItem>

                <div className="h-px bg-white/5" />

                <MenuItem
                    onClick={() => {
                        handleClose();
                        onOpen("series");
                    }}
                    disableRipple
                    className="font-sfl uppercase tracking-[1.5px] justify-center text-sm"
                >
                    Series
                </MenuItem>

                <div className="h-px bg-white/5" />

                <MenuItem
                    onClick={() => {
                        handleClose();
                        onOpen("novel");
                    }}
                    disableRipple
                    className="font-sfl uppercase tracking-[1.5px] justify-center text-sm"
                >
                    Novel
                </MenuItem>

                <div className="h-px bg-white/5" />

                <MenuItem
                    onClick={handleClose}
                    className="font-sfl tracking-[1px]"
                    disableRipple
                >
                    <Link href="/account/library?status=draft">
                        Choose from drafts
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right mt-[1.5px]"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                        </svg>
                    </Link>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
