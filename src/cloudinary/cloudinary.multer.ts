import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './temp',
    filename: (_, file, cb) => {
      const randomName = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, randomName + extname(file.originalname));
    },
  }),
};

