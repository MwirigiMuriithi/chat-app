'use client';
import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}
const MobileItem:  React.FC<MobileItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick
}) => {
    const hanleClick = () => {
        if (onClick) {
            return onClick();
        }
    }
  return (
    <Link 
    onClick={onClick}
    className={clsx(`
        group
        flex
        gap-x-3
        text-sm
        leading-6
        font-semibold
        w-full
        justify-center
        p-4
        text-gray-500
        hover:text-black
        hover:bg-gray-100
        `,
        active && 'bg-gray-100 text-black'
    )}
    href={href}>
        <Icon className="h-8 w-8" />
    </Link>
  )
}

export default MobileItem;