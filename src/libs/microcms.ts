// MicroCMS連携用のライブラリ
// 後でMicroCMS SDKをインストールして実装を追加する予定
// npm install microcms-js-sdk

export type News = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
  category: string;
  publishedAt: string;
  revisedAt: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  content: string;
  icon?: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  revisedAt: string;
};

// MicroCMS SDKを使用したAPI呼び出しの実装例（実際の利用時に実装）
/*
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export const getNewsList = async () => {
  const response = await client.getList<News>({
    endpoint: 'news',
    queries: { limit: 10 },
  });
  return response;
};

export const getNewsDetail = async (contentId: string) => {
  const response = await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
  });
  return response;
};

export const getServiceList = async () => {
  const response = await client.getList<Service>({
    endpoint: 'services',
    queries: { limit: 100 },
  });
  return response;
};

export const getServiceDetail = async (contentId: string) => {
  const response = await client.getListDetail<Service>({
    endpoint: 'services',
    contentId,
  });
  return response;
};
*/ 