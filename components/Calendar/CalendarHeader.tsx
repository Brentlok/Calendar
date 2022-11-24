import Image from "next/image";
import { DateType } from "~/types";
import { printMonth } from "~/utils";

type Props = {
    date: DateType;
    changeMonth?: (num: 1 | -1) => void;
}

export const CalendarHeader = (props: Props) => (
    <div className="flex justify-between">
        <div
            className="cursor-pointer"
            onClick={() => props.changeMonth?.(-1)}
        >
            <Image
                src='/assets/arrow.svg'
                alt=""
                width={11}
                height={5}
            />
        </div>
        <span>
            {printMonth(props.date)}
            &nbsp;
            {props.date.year}
        </span>
        <div
            className="cursor-pointer -scale-x-100"
            onClick={() => props.changeMonth?.(1)}
        >
            <Image
                src='/assets/arrow.svg'
                alt=""
                width={11}
                height={5}
            />
        </div>
    </div>
)