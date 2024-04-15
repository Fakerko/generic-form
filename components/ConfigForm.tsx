import React from "react";
import { Input } from "@/components/Input";
import { type TFormTypes } from "@/constants/formTypes";
import { type TDataTypes } from "@/app/page";

export const ConfigForm = ({ data, config, control }: {
	data: TDataTypes[],
	config: TFormTypes[],
	control: any
}) => {

	const getFieldTypeByValue = (value: string) => {
		if (value.toLocaleLowerCase() === "true" || value.toLocaleLowerCase() === "false") {
			return "checkbox";
		}

		if (!isNaN(Number(value))) {
			return "number";
		}

		if (value.includes(",")) {
			return "unknown";
		}

		return "text";
	}

	const renderFields = () => {
		return data.map((item: TDataTypes) => {
			const configData = config.find((itemConfig: any) => itemConfig[item.key]);
			const formType = configData && configData[item.key] ? configData[item.key] : getFieldTypeByValue(item.value);
			if (formType) {
				let field;
				let fieldList = [] as JSX.Element[];
				switch (formType) {
					case "checkbox":
						field = <Input
							{...control.register(item?.key)}
							type="checkbox"
							defaultChecked={item?.value === "true"}
							readOnly={item?.readonly}
						/>
						break;
					case "number":
						field = <Input
							{...control.register(item?.key)}
							type="number"
							className="w-full"
							defaultValue={item?.value}
							readOnly={item?.readonly}
						/>
						break;
					case "password":
						field = <Input
							{...control.register(item?.key)}
							type="password"
							className="w-full"
							defaultValue={item?.value}
							readOnly={item?.readonly}
						/>
						break;
					case "checkboxList":
						configData && configData?.options && configData?.options.forEach((listItem: string) => {
							fieldList.push(<Input
								{...control.register(`${item?.key}.${listItem.split(".").join("-")}`)}
								type="checkbox"
								defaultChecked={item?.value.split(",").includes(listItem)}
								readOnly={item?.readonly}
							/>);
						});
						break;
					default:
					case "text":
						field = <Input
							{...control.register(item?.key)}
							type="text"
							className="w-full"
							defaultValue={item?.value}
							readOnly={item?.readonly}
						/>
						break;
				}
				return <label key={item?.key} className={["grid sm:grid-cols-2 justify-start gap-4", fieldList.length > 0 ? "items-start" : "items-center"].join(" ")}>
					{item?.key}
					{fieldList && (
						<div>
							{fieldList.length > 0 ? fieldList.map((field, index) => (
								<label className="flex gap-4 items-center" key={index}>
									{field}
									{configData?.options &&
										configData.options[index].replaceAll(".", " ")}
								</label>
							)) : field}
						</div>
					)}
				</label>
			}
		});
	}

	return (
		<div className="grid gap-4">
			{renderFields()}
		</div>
	)
}