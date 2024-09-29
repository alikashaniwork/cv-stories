"use client";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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

export default function Options() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const pathname = usePathname();
    const { push } = useRouter();
    const searchParams = useSearchParams();
    const status = searchParams.get("status") || "published";
    const params = new URLSearchParams(searchParams.toString());
    const handleStatus = (value: string) => {
        params.delete("status");
        params.append("status", value);
        push(`${pathname}?${params.toString()}`);
        handleClose();
    };
    return (
        <div>
            <button
                className="font-sfr !capitalize text-[.95rem] gap-2 !bg-[unset] hover:!bg-[unset] !text-blue"
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <Image
                    width={18}
                    height={18}
                    src="/icons/categories2.png"
                    alt=""
                    priority
                />
                {status}
            </button>
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
                    onClick={() => handleStatus("published")}
                    disableRipple
                    className="font-sfl uppercase tracking-[1.5px] justify-center text-sm"
                >
                    Published
                </MenuItem>

                <div className="h-px bg-white/5" />

                <MenuItem
                    onClick={() => handleStatus("draft")}
                    disableRipple
                    className="font-sfl uppercase tracking-[1.5px] justify-center text-sm"
                >
                    Draft
                </MenuItem>

                <div className="h-px bg-white/5" />

                <MenuItem
                    onClick={() => handleStatus("saved")}
                    disableRipple
                    className="font-sfl uppercase tracking-[1.5px] justify-center text-sm"
                >
                    Saved Stories
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
