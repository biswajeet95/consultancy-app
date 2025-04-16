// import React from "react";
// import { useParams } from "react-router-dom";
// import { blogs } from "../data/blogs";
// import { Container, Typography, Box, Card, CardMedia, CardContent, useMediaQuery, useTheme  } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const BlogPage = () => {
//     const { slug } = useParams();
//     const navigate = useNavigate();
//     const selectedBlog = slug ? blogs.find(blog => blog.slug === slug) : null;
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//     const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


//     let variantFont = '15px';
//     let variant6font
//     if (isMobile) {
//         variantFont = '12px';
//         variant6font = '12px';
//     } else if (isTablet) {
//         variantFont = '15px';
//         variant6font = '10px';
//     }

//     return (
//         <Container sx={{ py: 4, cursor: "pointer" }}>
//             {selectedBlog ? (
//                 <>
//                     <Typography variant="h4" gutterBottom sx={{ fontWeight: '800', fontSize: variant6font, color: "#254163" , mt:2 }}>{selectedBlog.title}</Typography>
//                     <Card >
//                         <CardMedia component="img" height="300" image={selectedBlog.image} alt={selectedBlog.title} />
//                         <CardContent>
//                             <Typography variant="body1" sx={{ mt: 2 }}>{selectedBlog.content}</Typography>
//                         </CardContent>
//                     </Card>
//                 </>
//             ) : (
//                 <>
//                     <Typography variant="h4" gutterBottom sx={{ fontWeight: '800', fontSize: variant6font, color: "#254163", mt:2  }}>All Blogs</Typography>
//                     <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center" >
//                         {blogs.map((blog) => (
//                             <Card key={blog.id} sx={{ width: 280 }} onClick={() => navigate(`/blogs/${blog.slug}`)}>
//                                 <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
//                                 <CardContent>
//                                     <Typography variant="h6">{blog.title}</Typography>
//                                     <Typography variant="body2" color="text.secondary">{blog.description}</Typography>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </Box>
//                 </>
//             )}
//         </Container>
//     );
// };

// export default BlogPage;



import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
  Fab,
  Tooltip
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const selectedBlog = slug ? blogs.find(blog => blog.slug === slug) : null;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let variantFont = '15px';
  let variant6font;
  if (isMobile) {
    variantFont = '12px';
    variant6font = '12px';
  } else if (isTablet) {
    variantFont = '15px';
    variant6font = '10px';
  }

  return (
    <Container sx={{ py: 4, cursor: "pointer", position: "relative" }}>
      {selectedBlog ? (
        <>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: '800', fontSize: variant6font, color: "#254163", mt: 2 }}>
            {selectedBlog.title}
          </Typography>
          <Card>
            <CardMedia component="img" height="300" image={selectedBlog.image} alt={selectedBlog.title} />
            <CardContent>
              <Typography variant="body1" sx={{ mt: 2 }}>{selectedBlog.content}</Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: '800', fontSize: variant6font, color: "#254163", mt: 2 }}>
            All Blogs
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
            {blogs.map((blog) => (
              <Card key={blog.id} sx={{ width: 280 }} onClick={() => navigate(`/blogs/${blog.slug}`)}>
                <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
                <CardContent>
                  <Typography variant="h6">{blog.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{blog.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}

      {/* Floating Back to Home Button */}
      <Tooltip title="Back to Home" arrow>
        <Fab
          color="primary"
          aria-label="home"
          onClick={() => navigate("/")}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 20,
            backgroundColor: "#254163",
            '&:hover': {
              backgroundColor: "#1b2f4b",
            }
          }}
        >
          <HomeIcon />
        </Fab>
      </Tooltip>
    </Container>
  );
};

export default BlogPage;
