import HeaderAllPages from "@/components/HeaderAllPages";
import Link from "next/link";
import visiMisi from "../../../../public/img/visimisi-image.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DaftarAuditorMutuInternal = () => {
  return (
    <main className="mx-12 mb-12">
      <div className="breadcrumbs py-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Daftar Auditor Mutu Internal</li>
        </ul>
        <HeaderAllPages
          src={visiMisi}
          alt="daftar auditor mutu internal"
          title="Daftar Auditor Mutu Internal"
        />
        <section className="mt-7 leading-8 text-justify">
          <MyTabs />
        </section>
      </div>
    </main>
  );
};

export default DaftarAuditorMutuInternal;

const MyTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-fit grid-cols-2 text-center mx-auto">
        <TabsTrigger value="account">Auditor AMI Tahun 2022</TabsTrigger>
        <TabsTrigger value="password">Auditor AMI Tahun 2023</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Auditor AMI Tahun 2022</CardTitle>
            <CardDescription className="text-base leading-8">
              Daftar audior mutu internal badan penjaminan mutu universitas
              semarang sebagai berikut:
              <p>
                Surat keputusan bisa dilihat pada{" "}
                <a
                  href="https://drive.google.com/file/d/15aMsqfEcVplAN3ZagR_YPmnR4E0D1h-V/view"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  link ini
                </a>
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div> */}
          </CardContent>
          <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Auditor AMI Tahun 2023</CardTitle>
            <CardDescription className="text-base leading-8">
              Daftar audior mutu internal badan penjaminan mutu universitas
              semarang sebagai berikut:
              <p>
                Surat keputusan bisa dilihat pada{" "}
                <a
                  href="https://drive.google.com/file/d/1gSdp9Xvo-ggv2VI8Y6CAvutRghZTm-hQ/view"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  link ini
                </a>
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div> */}
          </CardContent>
          <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
