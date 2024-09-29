import { Session } from "@/authentication";
import useSignOut from "@/src/queries/user/account/useSignOut";
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

export default function User({ session }: { session: Session | null }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const logout = useSignOut();
    return (
        <div>
            <button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <Image
                    width={25}
                    height={25}
                    src="/icons/nav/user.png"
                    alt=""
                />
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
                <div>
                    {session ? (
                        <>
                            <MenuItem
                                onClick={handleClose}
                                disableRipple
                                className="!p-0"
                            >
                                <Link
                                    href="/account/dashboard"
                                    className="w-full h-full justify-between rounded-lg p-3 data-[focus]:bg-white/10 font-sfl tracking-[1.5px] text-sm text-neutral-200"
                                >
                                    Dashboard
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                </Link>
                            </MenuItem>

                            <div className="h-px bg-white/5" />

                            <MenuItem
                                onClick={handleClose}
                                disableRipple
                                className="!p-0"
                            >
                                <Link
                                    href="/account/library"
                                    className="w-full h-full justify-between rounded-lg p-3 data-[focus]:bg-white/10 font-sfl tracking-[1.5px] text-sm text-neutral-200"
                                >
                                    Library
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                </Link>
                            </MenuItem>

                            <div className="h-px bg-white/5" />

                            <MenuItem
                                onClick={handleClose}
                                disableRipple
                                className="!p-0"
                            >
                                <button
                                    className="w-full h-full justify-between rounded-lg p-3 data-[focus]:bg-white/10 font-sfl tracking-[1.5px] text-sm text-neutral-200"
                                    onClick={() => logout.mutate()}
                                >
                                    Sign Out
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-box-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                                        />
                                    </svg>
                                </button>
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            <MenuItem
                                onClick={handleClose}
                                disableRipple
                                className="!p-0"
                            >
                                <Link
                                    href="/signin"
                                    className="w-full h-full justify-between rounded-lg p-3 data-[focus]:bg-white/10 font-sfl tracking-[1.5px] text-sm text-neutral-200"
                                >
                                    Sign In
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                </Link>
                            </MenuItem>
                            <div className="h-px bg-white/5" />
                            <MenuItem
                                onClick={handleClose}
                                disableRipple
                                className="!p-0"
                            >
                                <Link
                                    href="/register"
                                    className="w-full h-full justify-between rounded-lg p-3 data-[focus]:bg-white/10 font-sfl tracking-[1.5px] text-sm text-neutral-200"
                                >
                                    Register
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                </Link>
                            </MenuItem>
                        </>
                    )}
                </div>
            </StyledMenu>
        </div>
    );
}
