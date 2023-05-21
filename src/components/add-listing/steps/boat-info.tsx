'use client';

import { boatTypes } from 'public/data/boat-types';
import { z } from 'zod';
import Image from 'next/image';
import { useAtom, useSetAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldHelperText from '@/components/ui/form-fields/field-helper-text';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { storeAtom, stepAtom } from '@/components/add-listing/add-listing';
import AdvancedRadio from '@/components/ui/form-fields/advanced-radiobox';
import Textarea from '@/components/ui/form-fields/textarea';
import SetPrice from '@/components/add-listing/set-price';
import Text from '@/components/ui/typography/text';
import Counter from '@/components/ui/counter';

const StorySchema = z.object({
  beginningWords: z
    .string()
    .min(1, { message: 'This field is requred!' })
    .max(450, { message: 'Reached your letter limit.' }).optional(),
  endingWords: z
    .string()
    .min(1, { message: 'This field is requred!' })
    .max(450, { message: 'Reached your letter limit.' }).optional(),
  keywords: z
    .string()
    .min(1, { message: 'This field is requred!' })
    .max(450, { message: 'Reached your letter limit.' }),
  age: z.number().min(1, { message: 'Minimum 1' }).max(60, { message: 'Maximum 100' }),
  minutes: z.number().min(1, { message: 'Minimum 1 minute required!' }).max(60, { message: '60 minutes are the maximum' }),
  theme: z.string()
});

type StorySchemaType = z.infer<typeof StorySchema>;

export default function BoatInfo() {
  const setStep = useSetAtom(stepAtom);
  const [store, setStore] = useAtom(storeAtom);
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<StorySchemaType>({
    defaultValues: {
      beginningWords: store.beginningWords,
      endingWords: store.endingWords,
      keywords: store.keywords,
      age: store.age,
      minutes: store.minutes,
      theme: store.theme,
    },
    resolver: zodResolver(StorySchema),
  });

  function handleBoatDetails(data: any) {
    setStore({
      ...store,
      beginningWords: data.beginningWords,
      endingWords: data.endingWords,
      keywords: data.keywords,
      age: data.age,
      minutes: data.minutes,
      theme: data.theme,
    });
    console.log(data);
    setStep(3);
  }

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      <form
        noValidate
        onSubmit={handleSubmit((data) => handleBoatDetails(data))}
      >
        <Textarea
          variant="outline"
          label="Now, let's give your story keywords"
          labelClassName="!mb-4 !text-lg !font-medium md:!text-xl lg:!mb-6 2xl:!text-2xl"
          textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
          maxLength={24}
          {...register('keywords')}
          error={errors.keywords?.message}
        />
        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
          {watch('keywords')?.length ?? 0}
          /24
        </p>
        <Text
          tag="h3"
          className="mb-4 mt-12 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          What type of boat you will have?
        </Text>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {boatTypes.map((item) => (
            <AdvancedRadio
              key={item.name}
              value={item.name}
              className="card-gradient cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-gray-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
              {...register('theme')}
            >
              <div className="relative inline-block h-8 w-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-bold lg:text-base">
                {item.name}
              </p>
            </AdvancedRadio>
          ))}
        </div>
        <FieldHelperText className="text-xs font-normal text-red">
          {errors.theme?.message}
        </FieldHelperText>
        
        <Textarea
          variant="outline"
          className="mt-12"
          label="Tell us how your story begins"
          maxLength={450}
          labelClassName="!mb-4 !text-lg !font-medium md:!text-xl lg:!mb-6 2xl:!text-2xl"
          textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
          {...register('beginningWords')}
          error={errors.beginningWords?.message}
        />
        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
          {watch('beginningWords')?.length ?? 0}
          /450
        </p>

        <Textarea
          variant="outline"
          className="mt-12"
          label="Tell us how your story ends"
          maxLength={450}
          labelClassName="!mb-4 !text-lg !font-medium md:!text-xl lg:!mb-6 2xl:!text-2xl"
          textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
          {...register('endingWords')}
          error={errors.endingWords?.message}
        />
        
        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
          {watch('endingWords')?.length ?? 0}
          /450
        </p>
        <Text
          tag="h3"
          className="mb-4 mt-12 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
        >
          Share some basic about your boat
        </Text>
        <div className="grid grid-cols-1 gap-2 lg:gap-3">
          <Controller
            name='minutes'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8">
                <Text className="text-base !font-semibold">Minutes</Text>
                <Counter
                  count={value ? value : 1}
                  onCount={onChange}
                  countBy={5}
                  buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                />
              </div>
            )}
          />
          <Controller
            name='age'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8">
                <Text className="text-base !font-semibold">Age</Text>
                <Counter
                  count={value ? value : 3}
                  onCount={onChange}
                  countBy={1}
                  buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                />
              </div>
            )}
          />

        </div>
        <CreateListingFooter onBack={() => setStep(1)} />
      </form>
    </div>
  );
}
