<template>
  <div class="Blogs">
    <!-- <h1>Blogs</h1>
    <div v-if="Blogs.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewBlog' }" class>Add Blog</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="Blog in Blogs" :key="Blog">
          <td>{{ Blog.title }}</td>
          <td>{{ Blog.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditBlog', params: { id: Blog._id } }">Edit</router-link>|
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no Blogs.. Lets add one now
      <br />
      <br />
      <router-link v-bind:to="{ name: 'NewBlog' }" class="add_Blog_link">Add Blog</router-link>
    </div>-->
  </div>
</template>

<script>
// import BlogsService from "../api/services/BlogsService";
export default {
  name: "Blogs"
  // data() {
  //   return {
  //     Blogs: []
  //   };
  // },
  // mounted() {
  //   this.getBlogs();
  // },
  // methods: {
  //   async getBlogs() {
  //     const response = await BlogsService.fetchBlogs();
  //     this.Blogs = response.data.Blogs;
  //   }
  // }
};
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_Blog_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>