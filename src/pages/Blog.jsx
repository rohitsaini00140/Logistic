import { Box, Grid, Stack } from "@mui/system";
import React from "react";
import Banner from "../components/Banner";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { blogs } from "../components/blog/blogData";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BlogSidebar from "../components/blog/BlogSidebar";

function Blog() {
  return (
    <Stack>
      <Banner heading={"Blog"} pageLink={"/blog"} />
      <Grid container sx={{ margin: { xs: "auto", sm: "0px 5rem " } }}>
        <Grid item size={{ xs: 12, sm: 9, md: 9 }}>
          <Grid container spacing={2}>
            {blogs.map((blog, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Card sx={{ borderRadius: 2, boxShadow: 1, margin: "10px" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.image}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "15px", sm: "1rem" },
                        display: "flex",
                        textAlign: "left",
                      }}
                    >
                      {blog.title}
                    </Typography>

                    <Box
                      display="flex"
                      alignItems="center"
                      gap={1}
                      sx={{ marginBottom: 1 }}
                    >
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ display: "flex", alignItems: "center",  fontSize: { xs: "13px", sm: "14px" },gap:"5px" }}
                      >
                        {blog.icon} by {blog.author} ~ {blog.date}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        display: "flex",
                        textAlign: "left",
                      }}
                    >
                      {blog.description}
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        color: "#eaaa00",
                        fontWeight: "bold",
                        textTransform: "none",
                        display: "flex",
                        justifyContent: "left",
                        fontSize: { xs: "13px", sm: "14px" },
                      }}
                      href={blog.link}
                    >
                      Read More <ArrowRightAltIcon />
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item size={{ xs: 12, sm: 3, md: 3 }}>
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Blog;
