import { AttributeSerializer } from './attributeSerializer.js';

Deno.serve(async (_req: Request) => {
    const result = await AttributeSerializer.evaluateAttribute(':@source', 'source', { source: 'potato' }, '_webc_raw_input_string');
    return Response.json(result);
});
