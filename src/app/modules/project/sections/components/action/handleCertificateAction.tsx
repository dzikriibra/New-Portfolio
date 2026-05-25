export const handleCertificateAction = (item: any) => {
  if (item.credentialSrc && item.credentialSrc.length > 0) {
    return {
      status: "verified",
      title: "Verified Certificate",
      description: "Official credential has been successfully archived.",
      image: item.credentialSrc[0],
    };
  }

  return {
    status: "pending",
    title: "Verification Pending",
    description: "This credential is currently awaiting digital archival.",
  };
};
