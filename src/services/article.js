import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey = '8884551a25msh79cadebd1892959p172789jsn4fea25d0025b';


export const articleApi = createApi ({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),

    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const {useLazyGetSummaryQuery} = articleApi;