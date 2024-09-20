'use client';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Button} from './ui/button';
import {Input} from './ui/input';
import {Textarea} from './ui/textarea';
import {toastPromise, useToast} from "@/hooks/use-toast";

// Définir le schéma de validation avec Zod
const schema = z.object({
    firstName: z.string().min(1, 'Prénom requis'),
    lastName: z.string().min(1, 'Nom requis'),
    email: z.string().email('Email invalide').min(1, 'Email requis'),
    phone: z.string().optional(), // Champ optionnel
    message: z.string().min(1, 'Message requis'),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
    const {toast} = useToast(); // Initialiser le toast
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        const formData = {
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim(),
            email: data.email.trim(),
            phoneNumber: data.phone,
            message: data.message.trim(),
        };

        const sendFormData = async () => {
            const response = await fetch('/api/contact', { // Assurez-vous que ce chemin est correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi du message.");
            }

            reset(); // Réinitialiser le formulaire
            return await response.json();
        };

        toastPromise(sendFormData(), {
            loading: 'Envoi en cours...',
            success: 'Message envoyé avec succès !',
            error: "Erreur lors de l'envoi du message.",
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-12"
        >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    {/* Prénom */}
                    <div>
                        <label htmlFor='firstName'
                               className='block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100'>
                            Prénom <sup>*</sup>
                        </label>
                        <div className='mt-1'>
                            <Input
                                type='text'
                                id='firstName'
                                placeholder='Prénom'
                                {...register('firstName')}
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
                            />
                            {errors.firstName &&
                                <span className='text-red-500 text-sm absolute'>{errors.firstName.message}</span>}
                        </div>
                    </div>

                    {/* Nom */}
                    <div>
                        <label htmlFor='lastName'
                               className='block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100'>
                            Nom <sup>*</sup>
                        </label>
                        <div className='mt-1'>
                            <Input
                                type='text'
                                id='lastName'
                                placeholder='Nom'
                                {...register('lastName')}
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
                            />
                            {errors.lastName &&
                                <span className='text-red-500 text-sm absolute'>{errors.lastName.message}</span>}
                        </div>
                    </div>

                    {/* Email */}
                    <div className='sm:col-span-2'>
                        <label htmlFor='email'
                               className='block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100'>
                            Email <sup>*</sup>
                        </label>
                        <div className='mt-1'>
                            <Input
                                type='email'
                                id='email'
                                placeholder='Email'
                                {...register('email')}
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
                            />
                            {errors.email &&
                                <span className='text-red-500 text-sm absolute'>{errors.email.message}</span>}
                        </div>
                    </div>

                    {/* Téléphone */}
                    <div className='sm:col-span-2'>
                        <label htmlFor='phone'
                               className='block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100'>
                            Téléphone
                        </label>
                        <div className='mt-1'>
                            <Input
                                type='tel'
                                id='phone'
                                placeholder='Téléphone (facultatif)'
                                {...register('phone')}
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className='sm:col-span-2'>
                        <label htmlFor='message'
                               className='block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100'>
                            Message <sup>*</sup>
                        </label>
                        <div className='mt-1'>
                            <Textarea
                                id='message'
                                rows={4}
                                placeholder='Votre message ici...'
                                {...register('message')}
                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
                            />
                            {errors.message &&
                                <span className='text-red-500 text-sm absolute'>{errors.message.message}</span>}
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex justify-end'>
                    <Button variant="default" className='w-full sm:w-auto' type='submit'>
                        Envoyer
                    </Button>
                </div>
            </div>
        </form>
    );
}
