import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import {PostListItemType} from 'types/PostItem.types'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

//props의 타입 지정
type PostListProps = {
  //PostItem 컴포넌트에 props로 넘겨줄 배열
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0;
  background-color: tomato;
  
  @media(max-width: 768px){
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
  <PostListWrapper>
    {posts.map(
      ({
      node: { id, frontmatter }
    }: PostListItemType) => (
      <PostItem {...frontmatter}
      link="https://www.google.co.kr" 
      key={id} 
      />
      )
    )}
  </PostListWrapper>
  )
}

export default PostList