// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for posts documents */
interface PostsDocumentData {
    /**
     * title field in *posts*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * first_publication_date  field in *posts*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.first_publication_date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    first_publication_date: prismicT.DateField;
    /**
     * subtitle field in *posts*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * author field in *posts*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.author
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    author: prismicT.RichTextField;
    /**
     * banner field in *posts*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * content field in *posts*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.content[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    content: prismicT.GroupField<Simplify<PostsDocumentDataContentItem>>;
}
/**
 * Item in posts → content
 *
 */
export interface PostsDocumentDataContentItem {
    /**
     * heading field in *posts → content*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.content[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
    /**
     * body field in *posts → content*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.content[].body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * posts document from Prismic
 *
 * - **API ID**: `posts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostsDocumentData>, "posts", Lang>;
export type AllDocumentTypes = PostsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PostsDocumentData, PostsDocumentDataContentItem, PostsDocument, AllDocumentTypes };
    }
}
