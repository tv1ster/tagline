import { type SectionElement, SectionFieldType } from "../sections/types.ts";

export const DEFAULT_ELEMENTS: SectionElement[] = [{
  id: '0',
  fields: {
    [SectionFieldType.Label]: 'Marketing',
    [SectionFieldType.Link]: 'https://example.com/marketing',
  }
}, {
  id: '1',
  fields: {
    [SectionFieldType.Label]: 'Design',
    [SectionFieldType.Link]: 'https://example.com/design',

  }
}, {
  id: '2',
  fields: {
    [SectionFieldType.Label]: 'Development',
    [SectionFieldType.Link]: 'https://example.com/development',
  }
},
  {
    id: '3',
    fields: {
      [SectionFieldType.Label]: 'Front',
      [SectionFieldType.Link]: 'https://example.com/front',


    }
  }, {
    id: '4',
    fields: {
      [SectionFieldType.Label]: 'AI engineering',
      [SectionFieldType.Link]: 'https://example.com/ai-engineering',

    }
  }
];