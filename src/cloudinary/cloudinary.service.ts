import { Injectable } from '@nestjs/common';
import cloudinary from './cloudinary.config';
import * as fs from 'fs';
import { UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadImage(filePath: string): Promise<string> {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'nestjs_uploads',
    });

    fs.unlinkSync(filePath); // delete temp file

    return result.secure_url; // <-- URL to store in DB
  }
  async uploadImageFromBuffer(file: Express.Multer.File) {
    const data = await new Promise<UploadApiResponse | undefined>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'evidence' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      uploadStream.end(file.buffer);
    });
    console.log(data);
    return data?.url ?? "";
  }
}

