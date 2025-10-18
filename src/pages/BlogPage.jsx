
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
  Tooltip,
  Grid,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const selectedBlog = slug ? blogs.find((blog) => blog.slug === slug) : null;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let variantFont = "15px";
  let variant6font;
  if (isMobile) {
    variantFont = "12px";
    variant6font = "12px";
  } else if (isTablet) {
    variantFont = "15px";
    variant6font = "10px";
  }

  return (

    <>
    <Navbar />
     <Container sx={{ py: 4,mb:5 , position: "relative" }}>
      {selectedBlog ? (
        <>
          {/* SEO Helmet Section for individual blog */}
          <Helmet>
            <title>{selectedBlog.title} | Your Site Name</title>
            <meta name="description" content={selectedBlog.description} />
            <meta property="og:title" content={selectedBlog.title} />
            <meta property="og:description" content={selectedBlog.description} />
            <meta property="og:image" content={selectedBlog.image} />
            <link
              rel="canonical"
              href={`https://www.iqraconsultancy.in/blogs/${slug}`}
            />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: selectedBlog.title,
                description: selectedBlog.description,
                image: selectedBlog.image,
                author: {
                  "@type": "Person",
                  name: "Biswajeet",
                },
                publisher: {
                  "@type": "Organization",
                  name: "iqraconsultancy",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.iqraconsultancy.in/logo192.png",
                  },
                },
                datePublished: selectedBlog.date || "2025-01-01",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://www.iqraconsultancy.in/blogs/${selectedBlog.slug}`,
                },
              })}
            </script>
          </Helmet>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "800",
              fontSize: variant6font,
              color: "#254163",
              mt: 2,
            }}
          >
            {selectedBlog.title}
          </Typography>

          <Box sx={{ mb: 2 }}>
            {selectedBlog.tags?.map((tag, index) => (
              <Link
                key={index}
                to={`/tags/${tag.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="caption"
                  sx={{ mr: 1, color: "#1976d2", fontWeight: 500 }}
                >
                  #{tag}
                </Typography>
              </Link>
            ))}
          </Box>

          <Card>
            <CardMedia
              component="img"
              height="300"
              image={selectedBlog.image}
              alt={selectedBlog.title}
            />
            <CardContent>
              <Typography
                variant="body1"
                sx={{ mt: 2 }}
                component="div"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "800",
              fontSize: variant6font,
              color: "#254163",
              mt: 2,
            }}
          >
            All Blogs
          </Typography>

          {/* ✅ Responsive Grid for 3 cards per row */}
          <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={3} justifyContent="center">
              {[...blogs].reverse().map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/blogs/${blog.slug}`)}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={blog.image}
                      alt={blog.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{blog.title}</Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 1,
                        }}
                      >
                        {blog.tags?.map((tag, index) => (
                          <Link
                            key={index}
                            to={`/tags/${tag.toLowerCase()}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#1976d2", fontWeight: 500 }}
                            >
                              #{tag}
                            </Typography>
                          </Link>
                        ))}
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {blog.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
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
            "&:hover": {
              backgroundColor: "#1b2f4b",
            },
          }}
        >
          <HomeIcon />
        </Fab>
      </Tooltip>
    </Container>
    </>
   
  );
};

export default BlogPage;
