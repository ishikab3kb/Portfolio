import { useTheme } from "@/context/ThemeContext";

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const { state } = useTheme();
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="w-24 h-24" viewBox="0 0 100 100">
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke={state.isDark ? "#333" : "#d4d4d8"}
        strokeWidth="8"
      />
      {/* Progress circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke="#fbbf24"
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
      {/* Percentage text */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="18"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgress;
