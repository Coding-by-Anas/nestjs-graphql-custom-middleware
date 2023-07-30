
export const isMobileEnvironmentUserAgentPresent = (req: any): boolean => {
    const userAgentHeader = req.headers['user-agent'] as string;

    if (!userAgentHeader) return false;

    const lowerCaseUserAgent = userAgentHeader.toLowerCase();

    const isMobileUserAgentPresent =
        lowerCaseUserAgent.includes('android') ||
        lowerCaseUserAgent.includes('iphone') ||
        lowerCaseUserAgent.includes('ipad');

    return isMobileUserAgentPresent;
};