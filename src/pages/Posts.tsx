"use client";

import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";

import PostCard from "../components/PostCard";
import { deletePost, getPosts } from "@/app/api/posts";

// const data = [
//   {
//     id: "0",
//     title: "Sagittis orci a scelerisque",
//     category: "sports",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Enim eu turpis egestas pretium. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Non nisi est sit amet. Mauris augue neque gravida in fermentum et. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Nulla pharetra diam sit amet nisl suscipit adipiscing. Adipiscing at in tellus integer feugiat.",
//   },
//   {
//     id: "1",
//     title: "Lorem ipsum dolor sit amet",
//     category: "lifestyle",
//     body: "Est lorem ipsum dolor sit amet consectetur. Donec massa sapien faucibus et molestie ac feugiat sed. Gravida in fermentum et sollicitudin ac orci phasellus. Erat velit scelerisque in dictum non consectetur a erat nam. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Dignissim enim sit amet venenatis urna cursus eget.",
//   },
//   {
//     title: "blah blah blah blah",
//     body: "lkjd lkasd alkjf lkasdjf lkasdjf lkjadsf asdf",
//     category: "politics",
//     id: "3",
//   },
//   {
//     title: "The heights",
//     body: "The heights of great men, reached and kept, were not attained by sudden flight;\nBut they, while their companions were fast asleep, were toiling upwards in the night",
//     category: "business",
//     id: "4",
//   },
// ];

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      if (response?.status === 200) {
        setPosts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await deletePost(id);
      if (response?.status === 204) {
        const updatedPosts = posts.filter((p) => p.id !== id);
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={2}>
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} handleDelete={handleDelete} />
        ))}
      </Masonry>
    </Container>
  );
}
