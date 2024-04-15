export type TFormTypes = {
	[key: string]: string | string[] | undefined;
	options?: string[];
};

export const formTypes = [
	{
		"AllowOfflineTxForUnknownId": "checkbox",
	},
	{
		"AuthorizationCacheEnabled": "checkbox",
	},
	{
		"AuthorizeRemoteTxRequests": "checkbox",
	},
	{
		"BlinkRepeat": "number",
	},
	{
		"ClockAlignedDataInterval": "number",
	},
	{
		"ConnectionTimeOut": "number",
	},
	{
		"ConnectorPhaseRotation": "uknonwn",
	},
	{
		"ConnectorPhaseRotationMaxLength": "number",
	},
	{
		"GetConfigurationMaxKeys": "number",
	},
	{
		"HeartbeatInterval": "number",
	},
	{
		"LightIntensity": "number",
	},
	{
		"LocalAuthorizeOffline": "checkbox",
	},
	{
		"LocalPreAuthorize": "checkbox",
	},
	{
		"MaxEnergyOnInvalidId": "number",
	},
	{
		"MeterValuesAlignedData": "unknown",
	},
	{
		"MeterValuesAlignedDataMaxLength": "number",
	},
	{
		"MeterValuesSampledData": "checkboxList",
		"options": [
			"Current.Export",
			"Current.Import",
			"Current.Offered",
			"Energy.Active.Export.Register",
			"Energy.Active.Import.Register",
			"Energy.Reactive.Export.Register",
			"Energy.Reactive.Import.Register",
			"Energy.Active.Export.Interval",
			"Energy.Active.Import.Interval",
			"Energy.Reactive.Export.Interval",
			"Energy.Reactive.Import.Interval",
			"Frequency",
			"Power.Active.Export",
			"Power.Active.Import",
			"Power.Factor",
			"Power.Offered",
			"Power.Reactive.Export",
			"Power.Reactive.Import",
			"RPM",
			"SoC",
			"Temperature",
			"Voltage",
		]
	},
	{
		"MeterValuesSampledDataMaxLength": "number",
	},
	{
		"MeterValueSampleInterval": "number",
	},
	{
		"MinimumStatusDuration": "number",
	},
	{
		"NumberOfConnectors": "number",
	},
	{
		"ResetRetries": "number",
	},
	{
		"StopTransactionOnEVSideDisconnect": "checkbox",
	},
	{
		"StopTransactionOnInvalidId": "checkbox",
	},
	{
		"StopTxnAlignedData": "text",
	},
	{
		"StopTxnAlignedDataMaxLength": "number",
	},
	{
		"StopTxnSampledData": "text",
	},
	{
		"StopTxnSampledDataMaxLength": "number",
	},
	{
		"SupportedFileTransferProtocols": "text",
	},
	{
		"SupportedFeatureProfiles": "uknown",
	},
	{
		"SupportedFeatureProfilesMaxLength": "number",
	},
	{
		"TransactionMessageAttempts": "number",
	},
	{
		"TransactionMessageRetryInterval": "number",
	},
	{
		"UnlockConnectorOnEVSideDisconnect": "checkbox",
	},
	{
		"WebSocketPingInterval": "number",
	},
	{
		"LocalAuthListEnabled": "checkbox",
	},
	{
		"LocalAuthListMaxLength": "number",
	},
	{
		"SendLocalListMaxLength": "number",
	},
	{
		"ReserveConnectorZeroSupported": "checkbox",
	},
	{
		"ChargeProfileMaxStackLevel": "number",
	},
	{
		"ChargingScheduleAllowedChargingRateUnit": "unknown",
	},
	{
		"ChargingScheduleMaxPeriods": "number",
	},
	{
		"ConnectorSwitch3to1PhaseSupported": "checkbox",
	},
	{
		"MaxChargingProfilesInstalled": "number",
	},
	{
		"chargingALimitConn1": "number",
	},
	{
		"AuthEnabled": "checkbox",
	},
	{
		"AuthEnabledOffline": "checkbox",
	},
	{
		"AuthDisabledIdTag": "unknown",
	},
	{
		"minSoC": "number",
	},
	{
		"maxSoC": "number",
	},
	{
		"SSID": "text",
	},
	{
		"WiFiSignalStrength": "number",
	},
	{
		"SerialNumber": "text",
	},
	{
		"PUK": "text",
	},
	{
		"WebSocketUrl": "text",
	},
	{
		"WebSocketUser": "text",
	},
	{
		"WebSocketPassword": "password",
	}
] as TFormTypes[];