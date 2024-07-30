interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="bg-green-600 h-4 rounded-md"
      style={{ width: `${progress}%` }}
    ></div>
  )
}
