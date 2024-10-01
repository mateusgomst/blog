class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id]) # Corrigido para singular
  end

  def new
    @article = Article.new # Corrigido para singular
  end

  def create
    @article = Article.new(article_params) # Corrigido erro de digitação e uso de singular
    if @article.save
      redirect_to @article
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit 
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      redirect_to @article
    else
      render :edit
    end
  end

  private

  def article_params # Corrigido o comentário e formatação
    params.require(:article).permit(:title, :body)
  end
end
