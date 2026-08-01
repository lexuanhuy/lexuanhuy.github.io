import QuickContact from "./QuickContact";
import SkillsTerminal from "./SkillsTerminal";

export const RightSide = ({ className }: { className?: string }) => {
    return (
        <div className={`flex items-center flex-col justify-center ${className}`}>
            <div className="w-full">
                <SkillsTerminal className="mb-4" />
                <QuickContact className="mb-4" />
            </div>
        </div>
    )
}