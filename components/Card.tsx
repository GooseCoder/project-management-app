import clsx from 'clsx';
import { FC } from 'react';

const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
}) => {
    return (
        <div
            className={clsx(
                'rounded-3xl px-10 py-4 drop-shadow-xl bg-white',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Card;
