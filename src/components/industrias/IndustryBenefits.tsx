"use client"

import { Industry } from "@/types"
import CheckRounded from '@mui/icons-material/CheckRounded';

interface IndustryBenefitsProps {
    selectedIndustry: Industry | null;
}

const IndustryBenefits = ({ selectedIndustry }: IndustryBenefitsProps) => {
    if (!selectedIndustry) return null;
    return (
        <div className="industry-benefits">
            <ul className="text-white space-y-5">
                {selectedIndustry.beneficios.map((benefit, index) => (
                    <li key={index} className="text-white text-lg flex gap-2">
                        <CheckRounded className="text-blue-500" />
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default IndustryBenefits;

