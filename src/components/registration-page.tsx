
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl, FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Logo from '../assets/logo.svg'
import { PasswordInput } from "./password-input"


const RegistrationPage = () => {
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          login: "",
          passHash: "",
        },
      })
    
      async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }
  return (
    <div className="flex justify-center flex-col items-center">
      <img className="mt-20 w-[270px] h-[250px]" src={Logo} alt="logo" />

      <Card className="w-96 mt-[100px] lg:mt-0 lg:w-[500px] border-none">
        <CardHeader>
          <CardTitle className="text-[30px] font-medium ">Зарегистрироваться</CardTitle>
        </CardHeader>
        <CardContent className=' '>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="login"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email / телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="Email или номер телефона" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passHash"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <PasswordInput
                        id="current_password"
                        placeholder="Введите пароль"
                        {...field}

                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">Зарегистрироваться</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegistrationPage