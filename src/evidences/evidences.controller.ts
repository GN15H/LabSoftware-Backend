import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('evidences')
export class EvidencesController {
  constructor(private readonly evidencesService: EvidencesService, private readonly cloudinary: CloudinaryService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body('data') body: string
  ) {
    const parsedBody: CreateEvidenceDto = JSON.parse(body);
    console.log(parsedBody);        // { title: "...", description: "...", price: "25" }
    console.log(file);        // image file uploaded

    const result = await this.cloudinary.uploadImageFromBuffer(file);
    const createdEvidence = await this.evidencesService.create(parsedBody, result);


    return { ...createdEvidence, result };
  }
}
