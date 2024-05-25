import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
//Hocam bi türlü yapamadım bunu chat gpt den de yardım aldım baya ama olmadı
@Directive({
  selector: '[appWelcome]',
  standalone: true
})
export class WelcomeDirective {
  private delay: number = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  @Input() set appWelcome(delay: number) {
    this.delay = Number(delay);
    this.displayContent();
  }

  private async displayContent() {
    // InnerText değişikliğini gerçekleştirmek için Renderer2 kullanılır
    this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Welcome');

    // Belirtilen süre kadar bekleyin
    await this.delayTime(this.delay);

    // ViewContainerRef'i temizle ve orijinal içeriği göster
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  private delayTime(ms: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}