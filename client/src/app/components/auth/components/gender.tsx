import { GenderTypeProps } from "../../../types/auth.props"

const Gender = ({ gender, handleChange }: GenderTypeProps) => {
    return (
        <select className='input-form' name='gender' value={gender} onChange={handleChange}>
            <option value="" disabled>Select yor gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
        </select>
    )
}

export default Gender