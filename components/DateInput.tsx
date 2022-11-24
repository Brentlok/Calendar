import Image from "next/image";
import { useEffect, useState } from "react";
import { DateType } from "~/types"
import { formatDateInput, dateToInput, inputToDate } from "~/utils";

type Props = {
    date: DateType;
    dateNum?: number;
    setDate: (date: DateType) => void;
}

export const DateInput = (props: Props) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (!props.dateNum) {
            return;
        }

        setValue(dateToInput(props.date));
    }, [props.dateNum, props.date]);

    useEffect(() => {
        if (value.length !== 10) {
            return;
        }

        if (inputToDate(value).month === props.date.month) {
            return;
        }

        setValue('');
    }, [props.date.month, value]);

    const handleChange = (val: string) => {
        if (val.length > 10) {
            return;
        }

        const date = formatDateInput(val);
        setValue(date);

        if (date.length !== 10) {
            return;
        }

        props.setDate(inputToDate(date));
    }

    return (
        <div className="flex flex-col justify-between w-64 h-14 border-1 border-black rounded-2xl p-2 text-gray-500 relative">
            <span className="text-xs">From when available</span>
            <input
                onChange={e => handleChange(e.target.value)}
                value={value}
                className="text-sm bg-none placeholder:text-black w-24 text-black"
                type="text"
                placeholder="dd.mm.yyyyy"
            />
            <div className="absolute top-0 right-2 h-14 grid place-items-center">
                <Image
                    src='/assets/calendar.svg'
                    alt=""
                    width={18}
                    height={20}
                />
            </div>
        </div>
    );
}