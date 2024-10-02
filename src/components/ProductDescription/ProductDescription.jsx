import { Star, User } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProductDescription() {
  return (
    <div className="grid  gap-8 px-4 md:px-6 py-8 mb-10 max-w-6xl mx-auto">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className=" py-8 px-1">
          <TabsTrigger value="description" className="py-4 px-10">
            Description
          </TabsTrigger>
          <TabsTrigger value="reviews" className="py-4 px-10">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-8">
          <div className="grid gap-6">
            <div className="text-sm leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Donec venenatis, nisl nec
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>
              <p className="mt-4">
                Donec venenatis, nisl nec ultricies lacinia, nisl nisl aliquam
                nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl
                nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="py-8">
          <div className="grid gap-6">
            <div>
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full flex items-center justify-center w-10 h-10">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1 grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      4.2 out of 5
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl,
                    eget aliquam nisl nisl sit amet nisl.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - John Doe, 2023-04-15
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full flex items-center justify-center w-10 h-10">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1 grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      4.8 out of 5
                    </p>
                  </div>
                  <p>
                    Donec venenatis, nisl nec ultricies lacinia, nisl nisl
                    aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Jane Smith, 2023-06-30
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full flex items-center justify-center w-10 h-10">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1 grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      3.6 out of 5
                    </p>
                  </div>
                  <p>
                    Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam
                    nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Michael Johnson, 2023-09-01
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductDescription;
