
import React from "react";
import { Container, Box, Typography, Card, CardMedia, CardContent, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

const Ditails = () => {
    const navigate = useNavigate();
    const recentBlogs = blogs.slice(-4);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    let variantFont = '15px';
    let variant6font
    if (isMobile) {
        variantFont = '12px';
        variant6font = '12px';
    } else if (isTablet) {
        variantFont = '15px';
        variant6font = '10px';
    }

    return (
        <Container sx={{ py: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} sx={{ cursor: "pointer", color: "#254163" }}>
                <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font }}>Recent Blogs</Typography>

                <Box sx={{ position: "relative", zIndex: 10 }}>
                    <Typography
                        variant="body1"
                        sx={{ cursor: "pointer", fontWeight: 500, color: "#254163", fontSize: variant6font }}
                        onClick={() => navigate("/blogs")}
                    >
                        View all blogs &gt;
                    </Typography>
                </Box>


            </Box>

           <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
                {[...recentBlogs].reverse().map((blog) => (
                    <Card key={blog.id} sx={{ width: 480, cursor: "pointer" }} onClick={() => navigate(`/blogs/${blog.slug}`)}>
                        <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
                        <CardContent>
                            <Typography variant="h6">{blog.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{blog.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box> 



        </Container>
    );
};

export default Ditails;


