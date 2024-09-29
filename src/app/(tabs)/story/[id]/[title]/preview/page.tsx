import Large from "./_components/large/Large";
import Small from "./_components/small/Small";
import ContextProvider from "./_Context";

export default function PreviewPage() {
    return (
        <ContextProvider>
            <Small />
            <Large />
        </ContextProvider>
    );
}
