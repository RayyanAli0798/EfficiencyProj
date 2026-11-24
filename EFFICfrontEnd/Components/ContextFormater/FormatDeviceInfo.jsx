function FormatDeviceInfo(deviceInfo) {
  return Object.values(deviceInfo || {})
    .map((d) =>
      `Serial: ${d.serialNumber} | Model: ${d.modelNumber} | Firmware: ${d.firmwareVersion}`
    )
    .join(String.fromCharCode(10));
}

export default FormatDeviceInfo;