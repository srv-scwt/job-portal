import { Box, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const textPrimary = isDark ? theme.palette.common.white : theme.palette.grey[900];
    const textSecondary = isDark ? alpha(theme.palette.common.white, 0.64) : alpha(theme.palette.grey[900], 0.54);
    const badgeBackground = isDark
        ? `linear-gradient(145deg, ${alpha(theme.palette.secondary.main, 0.24)} 0%, ${alpha(theme.palette.background.paper, 0.92)} 100%)`
        : `linear-gradient(145deg, ${alpha(theme.palette.secondary.main, 0.12)} 0%, ${alpha(theme.palette.common.white, 0.98)} 100%)`;

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                whiteSpace: 'nowrap'
            }}
        >
            <Box
                sx={{
                    width: 46,
                    height: 46,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: badgeBackground,
                    border: `1px solid ${alpha(theme.palette.secondary.main, isDark ? 0.3 : 0.18)}`,
                    boxShadow: isDark
                        ? `0 14px 28px ${alpha(theme.palette.common.black, 0.26)}`
                        : `0 14px 28px ${alpha(theme.palette.secondary.main, 0.16)}`
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `radial-gradient(circle at top right, ${alpha(theme.palette.secondary.main, 0.24)} 0%, transparent 58%)`
                    }}
                />
                <Box
                    component="img"
                    src={`${process.env.PUBLIC_URL}/favicon.svg`}
                    alt=""
                    aria-hidden="true"
                    sx={{
                        width: 28,
                        height: 28,
                        display: 'block',
                        position: 'relative',
                        zIndex: 1
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <Typography
                    component="span"
                    sx={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.32em',
                        textTransform: 'uppercase',
                        color: textSecondary,
                        mb: 0.35
                    }}
                >
                    Job
                </Typography>
                <Typography
                    component="span"
                    sx={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: '1rem',
                        fontWeight: 800,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: textPrimary
                    }}
                >
                    Portal
                </Typography>
            </Box>
        </Box>
    );
};

export default Logo;
