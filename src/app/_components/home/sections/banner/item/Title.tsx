const Title = ({ title }: { title: string }) => {
    return (
        <p className="text-2xl lg:text-4xl text-white font-sfh uppercas">
            {title}
        </p>
    );
};

export default Title;
