"use client";

import { ConfigForm } from "@/components/ConfigForm";
import { formTypes } from "@/constants/formTypes";
import { SubmitHandler, useForm } from "react-hook-form";

export type TDataTypes = {
	readonly: boolean;
	key: string;
	value: string;
};

export const externalData = [
	{
		"readonly": false,
		"key": "AllowOfflineTxForUnknownId",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "AuthorizationCacheEnabled",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "AuthorizeRemoteTxRequests",
		"value": "false"
	},
	{
		"readonly": false,
		"key": "BlinkRepeat",
		"value": "10"
	},
	{
		"readonly": false,
		"key": "ClockAlignedDataInterval",
		"value": "0"
	},
	{
		"readonly": false,
		"key": "ConnectionTimeOut",
		"value": "120"
	},
	{
		"readonly": false,
		"key": "ConnectorPhaseRotation",
		"value": "1.Unknown"
	},
	{
		"readonly": true,
		"key": "ConnectorPhaseRotationMaxLength",
		"value": "1"
	},
	{
		"readonly": true,
		"key": "GetConfigurationMaxKeys",
		"value": "50"
	},
	{
		"readonly": false,
		"key": "HeartbeatInterval",
		"value": "30"
	},
	{
		"readonly": false,
		"key": "LightIntensity",
		"value": "100"
	},
	{
		"readonly": false,
		"key": "LocalAuthorizeOffline",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "LocalPreAuthorize",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "MaxEnergyOnInvalidId",
		"value": "5000"
	},
	{
		"readonly": false,
		"key": "MeterValuesAlignedData",
		"value": "Energy.Active.Import.Register"
	},
	{
		"readonly": true,
		"key": "MeterValuesAlignedDataMaxLength",
		"value": "10"
	},
	{
		"readonly": false,
		"key": "MeterValuesSampledData",
		"value": "Power.Active.Import,Current.Offered,Energy.Active.Import.Register,Voltage"
	},
	{
		"readonly": true,
		"key": "MeterValuesSampledDataMaxLength",
		"value": "10"
	},
	{
		"readonly": false,
		"key": "MeterValueSampleInterval",
		"value": "10"
	},
	{
		"readonly": false,
		"key": "MinimumStatusDuration",
		"value": "1"
	},
	{
		"readonly": true,
		"key": "NumberOfConnectors",
		"value": "1"
	},
	{
		"readonly": false,
		"key": "ResetRetries",
		"value": "0"
	},
	{
		"readonly": false,
		"key": "StopTransactionOnEVSideDisconnect",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "StopTransactionOnInvalidId",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "StopTxnAlignedData",
		"value": ""
	},
	{
		"readonly": true,
		"key": "StopTxnAlignedDataMaxLength",
		"value": "0"
	},
	{
		"readonly": false,
		"key": "StopTxnSampledData",
		"value": ""
	},
	{
		"readonly": true,
		"key": "StopTxnSampledDataMaxLength",
		"value": "0"
	},
	{
		"readonly": true,
		"key": "SupportedFileTransferProtocols",
		"value": ""
	},
	{
		"readonly": true,
		"key": "SupportedFeatureProfiles",
		"value": "Core,FirmwareManagement,LocalAuthListManagement,Reservation,SmartCharging,RemoteTrigger"
	},
	{
		"readonly": true,
		"key": "SupportedFeatureProfilesMaxLength",
		"value": "6"
	},
	{
		"readonly": false,
		"key": "TransactionMessageAttempts",
		"value": "3"
	},
	{
		"readonly": false,
		"key": "TransactionMessageRetryInterval",
		"value": "60"
	},
	{
		"readonly": false,
		"key": "UnlockConnectorOnEVSideDisconnect",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "WebSocketPingInterval",
		"value": "50"
	},
	{
		"readonly": false,
		"key": "LocalAuthListEnabled",
		"value": "true"
	},
	{
		"readonly": true,
		"key": "LocalAuthListMaxLength",
		"value": "5000000"
	},
	{
		"readonly": true,
		"key": "SendLocalListMaxLength",
		"value": "450"
	},
	{
		"readonly": true,
		"key": "ReserveConnectorZeroSupported",
		"value": "false"
	},
	{
		"readonly": true,
		"key": "ChargeProfileMaxStackLevel",
		"value": "1"
	},
	{
		"readonly": true,
		"key": "ChargingScheduleAllowedChargingRateUnit",
		"value": "Current"
	},
	{
		"readonly": true,
		"key": "ChargingScheduleMaxPeriods",
		"value": "100"
	},
	{
		"readonly": true,
		"key": "ConnectorSwitch3to1PhaseSupported",
		"value": "false"
	},
	{
		"readonly": true,
		"key": "MaxChargingProfilesInstalled",
		"value": "1"
	},
	{
		"readonly": false,
		"key": "chargingALimitConn1",
		"value": "10"
	},
	{
		"readonly": false,
		"key": "AuthEnabled",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "AuthEnabledOffline",
		"value": "true"
	},
	{
		"readonly": false,
		"key": "AuthDisabledIdTag",
		"value": "NoAuthorization"
	},
	{
		"readonly": false,
		"key": "minSoC",
		"value": "9"
	},
	{
		"readonly": false,
		"key": "maxSoC",
		"value": "97"
	},
	{
		"readonly": true,
		"key": "SSID",
		"value": "prd2"
	},
	{
		"readonly": true,
		"key": "WiFiSignalStrength",
		"value": "57"
	},
	{
		"readonly": true,
		"key": "SerialNumber",
		"value": "953948"
	},
	{
		"readonly": true,
		"key": "PUK",
		"value": "40938994"
	},
	{
		"readonly": false,
		"key": "WebSocketUrl",
		"value": "ws://192.168.123.223:9999/ocpp16/ehf-gai-mck"
	},
	{
		"readonly": false,
		"key": "WebSocketUser",
		"value": "prdel"
	},
	{
		"readonly": false,
		"key": "WebSocketPassword",
		"value": ""
	}
] as TDataTypes[];

export default function Page() {
	const { handleSubmit, control } = useForm();
	const onSubmit: SubmitHandler<any> = data => {
		const updatedData = externalData.map((item) => {
			if (item.key in data) {
				if (typeof data[item.key] === "object") {
					data[item.key] = Object.keys(data[item.key]).filter((key) => data[item.key][key]).join(",");
					item.value = data[item.key].replaceAll("-", ".");
				} else {
					item.value = data[item.key];
				}
				return item;
			}
		});

		// updatedData is the final data prepared to be sent to the server
	};

	return (
		<section className="mx-auto max-w-2xl my-10">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<ConfigForm data={externalData} config={formTypes} control={control} />
				<button className="py-2.5 px-4 bg-slate-500 text-white hover:bg-slate-700" type="submit">Submit form</button>
			</form>
		</section>
	);
}