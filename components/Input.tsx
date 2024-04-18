import { forwardRef } from "react";

type InputProps = {
	className?: string;
	type?: string;
	defaultChecked?: boolean;
	readOnly?: boolean;
	defaultValue?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
	const classes = props?.type === "checkbox" ? "" : "p-3 border read-only:pointer-events-none read-only:opacity-50 read-only:bg-slate-200";
	return (
		<input ref={ref} className={[classes, className].join(" ")} {...props} />
	);
});