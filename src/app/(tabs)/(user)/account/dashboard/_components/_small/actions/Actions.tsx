import EditProfileLink from "./EditProfileLink";
import SignOut from "./SignOut";

export default function Actions() {
    return (
        <div className="flex items-center gap-2 px-4">
            <EditProfileLink />
            <SignOut />
        </div>
    );
}
