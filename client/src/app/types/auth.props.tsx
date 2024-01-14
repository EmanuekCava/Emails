import { ChangeEvent } from "react";

export type CountryTypeProps = {
    country: string;
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export type GenderTypeProps = {
    gender: string;
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}