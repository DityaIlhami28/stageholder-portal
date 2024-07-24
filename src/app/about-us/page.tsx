import { Container, Typography, Box } from "@mui/material";

const AboutPage = () => {
    return (
        <Container sx={{ py: 4, mb: 10 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                About Stageholder
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
                Your Ultimate Asset Management Solution
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body1" paragraph>
                    Stageholder is a cutting-edge asset management system designed to streamline and enhance the way you manage your valuable resources. Our platform offers a comprehensive suite of tools for tracking, organizing, and optimizing asset performance, ensuring that your assets are always in peak condition.
                </Typography>
                <Typography variant="body1" paragraph>
                    With Stageholder, you can easily monitor asset lifecycle, schedule maintenance, and generate detailed reports to make informed decisions. Our user-friendly interface and robust features empower businesses of all sizes to achieve greater efficiency and productivity. Whether you're managing equipment, inventory, or other critical assets, Stageholder provides the insights and control you need to stay ahead.
                </Typography>
                <Typography variant="body1" paragraph>
                    Join the thousands of organizations that trust Stageholder to keep their assets running smoothly and drive their success forward. Experience the future of asset management today with Stageholder.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutPage;
