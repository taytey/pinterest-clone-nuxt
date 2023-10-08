import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchImages = async () => {
  try {
    return await prisma.images.findMany({
      select: {
        imageSrc: true
      },
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default async (req) => {
  try {
    const images = await fetchImages();
    return {
      status: 200,
      body: images
    };
  } catch (error) {
    console.error('Server route error:', error);
    return {
      status: 500,
      body: { message: 'Internal Server Error' }
    };
  }
};
