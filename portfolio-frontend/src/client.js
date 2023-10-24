import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'nu78uh01',
    dataset: 'production',
    apiVersion: '2023-10-23',
    useCdn: true,
    token: 'skiUq2R5BLM62nN3g6TlCVwPbCGyvYceBIXsVT28NRYnbBNd3wjGkfkBC4wrf3N94MFufFInzuHVEx0HttHe6DCgghSnvWil19kKVdB7cjhte1Tm0uwqnN0TxPixh8AjtdvX7vr8GBVHu72m3LZ4OMBQze1ChG8MZ7n9VECTzVsEnmcRMYsX'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);