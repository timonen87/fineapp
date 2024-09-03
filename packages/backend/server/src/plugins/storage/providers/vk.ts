import assert from 'node:assert';

import { Logger } from '@nestjs/common';

import type { R2StorageConfig } from '../config';
import { S3StorageProvider } from './s3';

export class VkStorageProvider extends S3StorageProvider {
  override readonly type = 'vk-s3' as any /* cast 'r2' to 's3' */;

  constructor(config: R2StorageConfig, bucket: string) {
    assert(config.region, 'region is required for VK S3 storage provider');

    super(
      {
        ...config,
        endpoint: `https://fine-app.hb.ru-msk.vkcloud-storage.ru`,
        region: 'ru-msk',
      },
      bucket
    );
    this.logger = new Logger(`${VkStorageProvider.name}:${bucket}`);
    console.log(config.endpoint);
  }
}
